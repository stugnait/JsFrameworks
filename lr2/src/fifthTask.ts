interface Course {
    name: string;
    duration: number; // Тривалість у годинах
    students: string[];
}

class OnlineCourse implements Course {
    name: string;
    duration: number;
    students: string[];

    constructor(name: string, duration: number) {
        this.name = name;
        this.duration = duration;
        this.students = [];
    }

    registerStudent(student: string): void {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(`${student} зареєстрований на курс ${this.name}`);
        } else {
            console.log(`${student} вже зареєстрований на курс ${this.name}`);
        }
    }

    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}

class CourseManager {
    private courses: Course[] = [];

    addCourse(course: Course): void {
        this.courses.push(course);
        console.log(`Курс ${course.name} додано.`);
    }

    removeCourse(courseName: string): void {
        this.courses = this.courses.filter(course => course.name !== courseName);
        console.log(`Курс ${courseName} видалено.`);
    }

    findCourse(courseName: string): Course | undefined {
        return this.courses.find(course => course.name === courseName);
    }

    printCourses(): void {
        this.courses.forEach(course => {
            console.log(`Курс: ${course.name}, Тривалість: ${course.duration} годин`);
            console.log('Зареєстровані студенти:', course.students.join(', ') || 'немає студентів');
        });
    }
}

const courseManager = new CourseManager();


const course1 = new OnlineCourse('TypeScript Basics', 40);
const course2 = new OnlineCourse('Advanced JavaScript', 60);
const course3 = new OnlineCourse('Web Development', 80);

courseManager.addCourse(course1);
courseManager.addCourse(course2);
courseManager.addCourse(course3);

course1.registerStudent('John Doe');
course1.registerStudent('Jane Smith');
course2.registerStudent('Alice Johnson');
course2.registerStudent('Bob Brown');
course3.registerStudent('John Doe');


console.log(course1.isStudentRegistered('John Doe'));
console.log(course2.isStudentRegistered('John Doe'));

courseManager.removeCourse('Advanced JavaScript');

courseManager.printCourses();
