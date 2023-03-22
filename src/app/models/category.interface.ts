export class Category{
  id: string;
  name: string;
  createDate: string;


  constructor(id: string, name: string, createDate: string) {
    this.id = id;
    this.name = name;
    this.createDate = createDate;
  }
}
