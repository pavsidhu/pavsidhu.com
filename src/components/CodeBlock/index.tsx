import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"

import "./styles.css"

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
        <pre className={className} style={style}>
          {tokens.map((line, i) => {
            // Add a single space so empty lines are rendered
            if (line.length === 1 && line[0].content === "") {
              line[0].content = " "
            }

            return (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  )
}
