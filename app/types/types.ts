export interface ProtectedRootLayoutProps {
  children: React.ReactNode;
}
export interface AddCardProps {
  label: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  className: string;
  onClick: (e: any) => void;
}
export interface NextAuthSessionProviderProps {
  children: React.ReactNode;
}
export interface taskListProps {
  id: string;
  TaskName: string;
  TaskId: string;
}
export interface User {
  id: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}
export type CounterState = {
  CounterState: any;
  value: number;
};

export type ListSlice = {
  link: [];
  loading: boolean;
  error: null | undefined | string;
};
export type TaskSlice = {
  tasks: taskListProps[];
  loading: boolean;
  error: null | undefined | string;
};
export interface TableItem {
  longUrl: string;
  shortUrl: string;
  clickCount: number;
  id: string;
  createdAt: string;
}
export interface UserProfileData {
  id: string | null;
  email: string | null;
  name: string | null;
  hashedPassword: number | null;
  confirmPassword: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface UserProfileState {
  userData: UserProfileData | null;
  loading: boolean;
  error: string | null;
}
import { ChangeEvent } from "react";

export interface InputProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  type?: string;
  placeholder: string;
}
export interface TableItem {
  longUrl: string;
  shortUrl: string;
  clickCount: number;
  createdAt: string;
}

export interface Props {
  displayCount: number;
}
