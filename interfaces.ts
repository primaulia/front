/* eslint-disable @typescript-eslint/no-unused-vars */

export interface ItemType {
  id: string;
  identifier: string;
  label: string;
  description: string;
  price: number | null;
}

export interface SectionType {
  id: string;
  identifier: string;
  label: string;
  description: string;
  items: [ItemType];
}
