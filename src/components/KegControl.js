import React from "react";
import CreateKegForm from "./CreateKegForm";
import KegList from "./KegList";
import KegDetails from "./KegDetails";


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainKegList: [],
      selectedKeg: null
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
    if(this.state.selectedKeg != null) {
      this.setState({
        formVisible: false,
        selectedKeg: null
      });
    } else {
    this.setState(prevState => ({formVisible: !prevState.formVisible}));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList, formVisible: false})
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.find(keg => keg.id === id);
    this.setState({selectedKeg: selectedKeg});
  }

  render(){
    let visibleState = null;
    let buttonText=null;

    if(this.state.selectedKeg != null) {
      visibleState = <KegDetails 
        keg = {this.state.selectedKeg}
      />
      buttonText = "Return to Keg List"
    } else if(this.state.formVisible){
      visibleState = <CreateKegForm onKegCreation={this.handleAddingNewKegToList} />;
      buttonText="Return to Keg List";
    } else {
      visibleState = <KegList 
      kegList={this.state.mainKegList}
      onKegSelection={this.handleChangingSelectedKeg}
      />
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