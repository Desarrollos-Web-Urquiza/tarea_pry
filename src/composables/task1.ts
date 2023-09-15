export default function useTask1() {

    type Gender = "Masculino" | "Femenino";

    interface GenderProps {
        Gender: Gender;
    }

    const createGender = ({ 
        Gender
    }: GenderProps): string => {
        return `y me considero '${Gender}'.`;
    };
    interface BirthdayProps {
        birthdayDate: Date;
    }
    
    const createBirthday = ({ 
        birthdayDate
    }: BirthdayProps): string => {
        let birthdayDateString: String  = birthdayDate.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            timeZone: 'UTC'
        });
        return `nací el '${birthdayDateString}'`;
    };

    interface IdentificationProps {
        name: string;
        surname: string;
    }
    
    const createIdentification = ({ 
        name, 
        surname 
    }: IdentificationProps): string => {
        return `Soy '${name} ${surname}', `;
    };

    interface createGreetingProps {
        presentation: string;
        name: string;
        surname: string;
        birthdayDate: Date;
        Gender: Gender;
    }
    
    const createGreeting = ({
        presentation,
        name,
        surname,
        birthdayDate,
        Gender
    }: createGreetingProps) => ({
        presentation: presentation,
        identification: createIdentification({name, surname}),
        birthday: createBirthday({birthdayDate}),
        gender: createGender({Gender})
    })

    return {
        createGreeting
    };
}
