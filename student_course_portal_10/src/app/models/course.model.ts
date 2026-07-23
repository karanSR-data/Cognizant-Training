export type GradeStatus = 'enrolled' | 'passed' | 'failed' | 'pending';

export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: GradeStatus;
}
