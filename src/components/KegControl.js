import React from "react";
import CreateKegForm from "./CreateKegForm";
import KegList from "./KegList";


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainKegList: [],

    }
  }

  componentDidMount(){
    const data = localStorage.getItem('MAIN_KEG_LIST');
    if(data !== null){
      this.setState({mainKegList: JSON.parse(data)})
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.mainKegList !== this.state.mainKegList){
      localStorage.setItem('MAIN_KEG_LIST', JSON.stringify(this.state.mainKegList));
    }
  }

  handleClick = () => {
    console.log('clicked!')
    this.setState(prevState => ({formVisible: !prevState.formVisible}));
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList, formVisible: false})
  }

  render(){
    let visibleState = null;
    let buttonText=null;
    if(this.state.formVisible){
      visibleState = <CreateKegForm onKegCreation={this.handleAddingNewKegToList} />;
      
      buttonText="Return to Keg List";

    } else {
      visibleState = <KegList kegList={this.state.mainKegList} />;
      buttonText="Add Keg";
    }
    return(
      <>
        {visibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
}

export default KegControl;