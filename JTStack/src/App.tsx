import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import stylex from "@stylexjs/stylex";
import { StyleXStyles } from "@stylexjs/stylex/lib/StyleXTypes";
import { Button } from "@/components/ui/button"

type RectProps = {
  appearance?: StyleXStyles<{
    background?: string, // required
    border?: string, // optional
  }>;
  dimensions?: StyleXStyles<{
    width: string, // required
    height: string, // required
  }>;
};

const RectStyles = stylex.create({
  defaultAppearance: {
    background: "red",
  },
  borderAppearance: {
    background: "red",
    border: "1rem solid white",
  },
  smallDimensions: {
    width: "100px",
    height: "100px",
  },
});

export function Rect({ appearance, dimensions }: RectProps) {
  return <div {...stylex.props(appearance, dimensions)}
  />;
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <Button>Click me</Button>
        <Rect appearance={RectStyles.borderAppearance} dimensions={RectStyles.smallDimensions} />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
