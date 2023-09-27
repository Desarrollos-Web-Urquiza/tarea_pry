export default function useTask2() {

    type Gender = "Masculino" | "Femenino";

    interface GenderProps {
        Gender: Gender;
    }

    const createGender = ({ 
        Gender
    }: GenderProps): string => {
        return `Sexo: ${Gender}`;
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
        return `Mi cumpleaños: ${birthdayDateString}`;
    };

    interface NameProps {
        name: string;
    }

    const createName = ({ 
        name
    }: NameProps): string => {
        return `Mi nombre: ${name}`;
    };

    interface SurnameProps {
        surname: string;
    }

    const createSurname = ({ 
        surname
    }: SurnameProps): string => {
        return `Mi apellido: ${surname}`;
    };

    interface EmailProps {
        email: string;
    }

    const createEmail = ({
        email
    }: EmailProps): string => {
        return `Mi Email: ${email}`;
    };

    interface RoleProps {
        role: string;
    }

    const createRole = ({
        role
    }: RoleProps): string => {
        return `Role: ${role}`;
    };

    interface LastAccessProps {
        lastAccess: Date;
    }

    const createLastAccess = ({
        lastAccess
    }: LastAccessProps): string => {
        let lastAccessString: String = lastAccess.toLocaleString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'UTC'
        });
        return `Accediste la última vez: ${lastAccessString.replace(',', '')}`;
    };

    interface createListProps {
        name: string;
        surname: string;
        birthdayDate: Date;
        Gender: Gender;
        email: string;
        role: string;
        lastAccess: Date;
        userData: string;
    }
    
    const createList = ({
        name,
        surname,
        birthdayDate,
        Gender,
        email,
        role,
        lastAccess,
        userData
    }: createListProps) => ({
        name: createName({name}),
        surname: createSurname({surname}),
        birthday: createBirthday({birthdayDate}),
        gender: createGender({Gender}),
        email: createEmail({email}),
        role: createRole({role}),
        lastAccess: createLastAccess({lastAccess}),
        userData: userData
    })

    return {
        createList
    };
}