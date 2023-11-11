import Navbar from './Navbar';
import { connect } from 'react-redux';
import { useTranslation } from "react-i18next";

const NavbarContainer = (props) => {
    const { t } = useTranslation();

    return <Navbar {...props} t={t} />;
};

let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);