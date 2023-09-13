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
    interface createGreetingProps {
        presentation: string;
        name: string;
        surname: string;
    }
    
    const createGreeting = ({
        presentation,
        name,
        surname
    }): createGreetingProps => ({
        identification: createIdentification({name, surname})
    })

    return {
        contador,
        // incrementar
    };
}
