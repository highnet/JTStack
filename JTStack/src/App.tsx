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
  return (
    <div>
      <Button>Click me</Button>
      <Rect appearance={RectStyles.borderAppearance} dimensions={RectStyles.smallDimensions} />
    </div>
  )
}

export default App
