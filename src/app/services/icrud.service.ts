export interface ICrudService<T> {
  getById(id: number): T | undefined;
  create(data: Partial<T>): void;
  update(id: number, data: Partial<T>): void;

}
