export interface Resource<T> {
  data: T[];
  meta: {
    current_page: number;
    last_page: number;
    from: number;
    to: number;
    per_page: number;
    total: number;
  };
}
