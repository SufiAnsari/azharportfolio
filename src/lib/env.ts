import { z } from 'zod';

/**
 * Environment variable schema for type-safe access
 * Validates at build/runtime to catch missing vars early
 */

// Schema for server-side environment variables
const serverEnvSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  // Add server-only variables here
  // CONTACT_EMAIL: z.string().email().optional(),
});

// Schema for client-side environment variables (NEXT_PUBLIC_*)
const clientEnvSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default('http://localhost:3000'),
  NEXT_PUBLIC_SITE_NAME: z.string().default('Portfolio'),
});

// Combine schemas
const envSchema = serverEnvSchema.merge(clientEnvSchema);

// Type inference
export type Env = z.infer<typeof envSchema>;

// Validate and export environment
function validateEnv(): Env {
  const parsed = envSchema.safeParse({
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
  });

  if (!parsed.success) {
    console.error('❌ Invalid environment variables:', parsed.error.flatten());
    throw new Error('Invalid environment variables');
  }

  return parsed.data;
}

export const env = validateEnv();
