import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import "prism-material-themes/themes/material-palenight.css"

export default function CodeBlock({ children, className }) {
  const language = className ? className.replace(/language-/, "") : ""

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={undefined}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, padding: "var(--space-s)", fontSize: "1.2rem" }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
