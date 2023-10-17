import type { TypeParameterValue, TypeData } from '@/components/common/VPlayground/types';

export function useParameter() {
    function setValue(playgroundValues: TypeParameterValue, data: TypeData): void {
        playgroundValues[data.key] = data.value;
    }
    
    return { setValue };
}