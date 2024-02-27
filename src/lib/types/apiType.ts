export interface ApiResponse<T> {
  status: number;
  success: boolean;
  result: T | null;
  error: Array<ApiError> | null;
  info: string | null;
}

export interface ApiError {
  message: string;
}
