import { MenuCategory } from "./menu-category.model";

export const CATEGORIES: MenuCategory[] = [
  {
    id: 1,
    name: "Coffee",
    description: "Freshly brewed, served hot or cold.",
    imagePath:
      "https://res.cloudinary.com/grohealth/image/upload/v1581688713/DCUK/Content/iStock-938993594-1000x600.jpg"
  },
  {
    id: 2,
    name: "Sweet Bread",
    description: "Freshly baked sweet bread in a variety of flavors.",
    imagePath:
      "https://cdn.pixabay.com/photo/2019/03/14/06/37/bread-4054286_960_720.jpg"
  },
  {
    id: 3,
    name: "Pastries",
    description: "Freshly baked desserts.",
    imagePath:
      "https://assets3.thrillist.com/v1/image/2824932/size/gn-gift_guide_variable_c_2x.jpg"
  }
];
