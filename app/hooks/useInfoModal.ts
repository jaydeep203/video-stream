import { create } from "zustand";

interface infoModalProps{
    isOpen: boolean;
    id:string;
    onOpen: () => void;
    onClose: () => void;
}

const useInfoModal = create<infoModalProps>((set)=>({
    isOpen:false,
    id:"",
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen:false})
}));

export default useInfoModal;