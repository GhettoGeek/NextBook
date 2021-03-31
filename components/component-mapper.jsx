import {
  Blockquote,
  Code,
  CustomLink,
  Details,
  CustomImage,
  Pre,
  Summary,
  Tab,
  Table,
  Tabs,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Badge,
  Card
} from './mdx-components'

export const componentMap = {
  table: Table,
  a: CustomLink,
  img: CustomImage,
  blockquote: Blockquote,
  pre: Pre,
  details: Details,
  summary: Summary,
  code: Code,
  tabs: Tabs,
  tab: Tab,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  badge: Badge,
  card: Card
}