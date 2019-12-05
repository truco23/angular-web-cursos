export interface CourseInterface {
    id: string;
    idCategory: {
        id: string,
        name: string
    };
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date
}