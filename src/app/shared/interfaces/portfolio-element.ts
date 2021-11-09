import { Tool } from "./portfolio-element/tool";

export interface PortfolioElement {
  id: number;
  title: string;
  year: number;
  description: string;
  sampleUrl: string,
  imgUrl: string,
  tools: Tool[];
}
