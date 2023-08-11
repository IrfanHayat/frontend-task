export interface NomineeCardProps {
    title: string;
    photoUrl: string;
    selected: boolean;
    onClick: () => void;
}


export interface NomineeProps {
    category: {
        id: string;
        title: string;
        items: { id: string; title: string; photoUrL: string }[];
    };

}


export interface AlertNotificationProps {
    severity: 'success' | 'error';
    message: string;
    onClose: () => void;
}


export interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}