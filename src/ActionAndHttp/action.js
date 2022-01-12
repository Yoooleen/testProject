export const dispatchToProps = (dispatch) => {
    return {
      inputChange(e) {
        let action = {
          type: "change_input",
          value: e.target.value,
        };
        dispatch(action);
      },
      clickBtn() {
        let action = {
          type: "add_item",
        };
        dispatch(action);
      },
      deletItem(idx) {
        let action = {
          type: "delete_item",
          index: idx
        };
        dispatch(action);
      },
    };
  };