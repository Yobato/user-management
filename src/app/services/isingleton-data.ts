export interface ISingletonDataService<T> {
  get(): T;
  update(data: Partial<T>): void;
}
