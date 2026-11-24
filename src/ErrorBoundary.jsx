import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error, info) {
    // Keep diagnostics in the browser console without exposing internals in the UI.
    console.error('NEXA UI error:', error, info);
  }

  render() {
    if (this.state.failed) {
      return (
        <main className="app-error" role="alert">
          <div className="brand-mark">N</div>
          <h1>Something went wrong</h1>
          <p>Try reloading NEXA. Your account and saved content are not changed.</p>
          <button className="primary-btn" onClick={() => window.location.reload()}>
            Reload NEXA
          </button>
        </main>
      );
    }
    return this.props.children;
  }
}
