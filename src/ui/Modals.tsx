import LoginModal from "../javadoc/api/LoginModal";
import JavadocModal from "../javadoc/JavadocModal";
import IndexProgressModal from "./IndexProgressModal";
import ProgressModal from "./ProgressModal";

const Modals = () => {
    return (
        <>
            <ProgressModal />
            <IndexProgressModal />
            <JavadocModal />
            <LoginModal />
        </>
    );
};

export default Modals;