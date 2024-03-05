import { Box as _Box } from "@miirmoon/react-components-layout"
import "@miirmoon/react-components-layout/style.css"

export default {
  title: 'React Components/Layout/Box',
  component: _Box,
  parameters: {
    layout: "centered"
  },
  tags: ['autodocs']
}

export const BlockStory = {
  args: {
    as: 'button',
    padding: '5',
    background: 'pink',
    boxShadow: 'xl',
    borderRadius: 'md',
  }
}