import { computed, useSlots, Ref } from 'vue';

export function useLabel(propsLabel: Ref<string>) {
    const slots = useSlots();

    const isLabel = computed<boolean>(() => {
        const slotDefault = slots.default ? slots.default() : [];
        const isSlot = slotDefault[0]?.children;
        return !!(isSlot || propsLabel.value);
    });
    
    return { isLabel };
}