'use client';

/**
 * ErrorBoundary — React class-based error boundary
 *
 * Catches render-time errors in any child component tree.
 * Logs full error + component stack to the console (server logs in SSR,
 * browser console in CSR) and renders a safe fallback UI.
 *
 * IMPORTANT: Never render `error.message` or `error.stack` into the DOM.
 * Those values may contain internal file paths or sensitive context.
 *
 * Usage:
 *   <ErrorBoundary fallback={<p>This section failed to load.</p>}>
 *     <MyComponent />
 *   </ErrorBoundary>
 */

import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  /** UI to render when an error is caught. Defaults to a minimal inline message. */
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    // Update state so the next render shows the fallback UI.
    // Do NOT store the error in state — it must not reach client-side rendering.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    // Log full details server-side / to browser devtools only.
    // This output is never serialised into the HTML sent to the user.
    console.error(
      JSON.stringify({
        ts: new Date().toISOString(),
        level: 'ERROR',
        message: 'ErrorBoundary caught a render error',
        errorName: error.name,
        // Component stack shows which component threw — useful for debugging,
        // safe because it only appears in server/devtools logs.
        componentStack: info.componentStack,
      }),
    );
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div
            role="alert"
            aria-live="polite"
            style={{
              padding: '2rem 1rem',
              textAlign: 'center',
              color: 'rgba(222,219,200,0.45)',
              fontSize: '0.8125rem',
              fontFamily: 'Almarai, system-ui, sans-serif',
            }}
          >
            This section could not be loaded. Please refresh the page.
          </div>
        )
      );
    }

    return this.props.children;
  }
}
