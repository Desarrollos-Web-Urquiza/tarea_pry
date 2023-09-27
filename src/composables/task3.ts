export default function useTask3() {

    const createName = (name: string): string => {
        return `${name},`;
    };

    const calculateAge = (birthdayDate: Date): number => {
        const today = new Date();
        let age = today.getFullYear() - birthdayDate.getFullYear();
        const monthDifference = today.getMonth() - birthdayDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdayDate.getDate())) {
            age--;
        }
        return age;
    };

    const createAge = (birthdayDate: Date): string => {
        const age = calculateAge(birthdayDate);
        return `tienes ${age} años,`;
    };

    const createRole = (role: string): string => {
        return `eres ${role}.`;
    };

    const workAreaIntro = "Esta es tu área de trabajo:";

    interface createGreetingProps {
        name: string;
        birthdayDate: Date;
        role: string;
        workAreas: string[];
    }

    const createGreeting2 = ({
        name,
        birthdayDate,
        role,
        workAreas
    }: createGreetingProps) => {
        const greeting = `${createName(name)} ${createAge(birthdayDate)} ${createRole(role)} ${workAreaIntro}`;
        return {
            greeting,
            workAreas
        };
    };

    return {
        createGreeting2
    };
}
