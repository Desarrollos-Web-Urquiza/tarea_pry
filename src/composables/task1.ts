import { ref } from 'vue';

export default function useTask1() {
    const contador = ref(0);

    // function greeting() {
    //    return 'Hola, me presento';  
    // }

    // function incrementar() {
    //     contador.value++;
    // }

    // function incrementar() {
    //     contador.value++;
    // }

    // function incrementar() {
    //     contador.value++;
    // }

     interface BirthdayProps {
        birthdayDate: Date;
    }
    
    const createBirthday = ({ 
        birthdayDate
    }: BirthdayProps): string => {
        return `nací el '${birthdayDate}'`;
    };

    interface IdentificationProps {
        name: string;
        surname: string;
    }
    
    const createIdentification = ({ 
        name, 
        surname 
    }: IdentificationProps): string => {
        return `Soy '${name} ${surname}'`;
    };

    interface createGreetingProps {
        presentation: string;
        name: string;
        surname: string;
        birthdayDate: Date;
    }
    
    const createGreeting = ({
        presentation,
        name,
        surname,
        birthdayDate
    }: createGreetingProps) => ({
        presentation: presentation,
        identification: createIdentification({name, surname}),
        birthday: createBirthday({birthdayDate})
    })

    return {
        contador,
        createGreeting
        // incrementar
    };
}
