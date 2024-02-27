

##

<div align="center">
  <h1>JTStack</h1> </br></br>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" width="52" alt="typescript logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" width="52" alt="react logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" width="52" alt="html5 logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" width="52" alt="css3 logo"  />
</div>
<div align="center""> 
<img alt="npm" src="https://img.shields.io/npm/v/vite?style=for-the-badge">
<img alt="node-current" src="https://img.shields.io/node/v/vite?style=for-the-badge">
</div>

## JTStack
Quick Start for Modern Web Applications

## ❓ How to get started?
```
yarn
yarn dev
```
-  ➜  Local:   [http://localhost:5173/](http://localhost:5173/) `yarn dev`
-  ➜  Network: [http://192.168.0.64:5173/](http://192.168.0.64:5173/) `yarn dev -- --host`
-  ➜  press h + enter to show help

## 🛠️ Tech Stack
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
  - with Hot Module Reload and ESLint rules.
- [StyleX CSS](https://github.com/nonzzz/vite-plugin-stylex)
  - StyleX is a simple, easy-to-use JavaScript syntax and compiler for styling web apps. StyleX combines the strengths and avoids the weaknesses of both inline styles and static CSS.

  - To define a style in ts:
    ```jsx
    import stylex from "@stylexjs/stylex";
    const styles = stylex.create({
      quad: {
        width: "100%",
        height: "100%",
      },
    });
    ```
  - Which then can be passed directly to any DOM component:
    ```jsx
    <div    
      {...stylex.props(styles.quad)}
    />
    ```
  - To define type-safe CSS component as props, Which then can be passed consumed by a ReactFC:
    ```jsx
    import { StyleXStyles } from "@stylexjs/stylex/lib/StyleXTypes";
    type Props = {
      style?: StyleXStyles<{
        color: string, // required
        margin?: string, // optional
      }>;
    };

    export default function Rect({ style }: Props) {
      return <div {...stylex.props(style, styles.quad)}
     />;
    ```
  - To easily create variants of components: 
    ```jsx
    const styles = stylex.create({
      defaultRect: {
        color: "red",
      },
     marginRect: {
        color: "blue",
        margin: "1rem",
      },
    });
    
    <Rect {...stylex.props(styles.defaultRect)} />
    <Rect {...stylex.props(styles.marginRect)} />
    ```


- [shadcn/ui](https://ui.shadcn.com/) 
  - Beautifully designed components built on top of Radix UI and Tailwind CSS that we can copy and paste into our app. Accessible. Customizable. Open Source.


## 📚 Resources
- https://stylexjs.com/docs/learn/
- https://ui.shadcn.com/
- https://github.com/nonzzz/vite-plugin-stylex



## 👥 Collaborators:

- [highnet](https://github.com/highnet)


<i>If you read this far, here is a cookie! 🍪</i>

