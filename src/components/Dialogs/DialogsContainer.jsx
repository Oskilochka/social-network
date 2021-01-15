import {sendMessageCreator, updateNewBodyMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../HOC/AuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewBodyMessage: (body) => {
            dispatch(updateNewBodyMessageCreator(body))
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
  /*  withAuthRedirect*/)(Dialogs);