import React, {useEffect} from "react";
import ShipItem from "./ShipItem";
import {Button, Container, Row, Spinner} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {IAppState} from "../store/types";
import {loadData, setPageNumber} from "../store/actionCreators";

const ShipsList: React.FC = () => {
  const {isLoading, pageNumber} = useSelector((state: IAppState) => state);
  const appData = useSelector((state: IAppState) => state.starshipsData)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData(pageNumber));
  }, [pageNumber, dispatch]);

  const listData = appData?.results.map((starshipItem) => {
    return <ShipItem starshipDetails={starshipItem} key={starshipItem.name}/>
  });

  const onPrevClick = () => {
    dispatch(setPageNumber(pageNumber - 1));
  };

  const onNextClick = () => {
    dispatch(setPageNumber(pageNumber + 1));
  };

  return (
    <Container>
      <h1 className="text-center">Star Wars ships</h1>
      {isLoading ?
        (<Spinner color={'dark'}/>) :
        <>
          <Row className={'justify-content-center list-wrapper'}>
            {listData}
          </Row>
          <div className="text-center btn-wrapper">
            <Button color="primary" size="lg" disabled={!appData?.previous}
                    onClick={onPrevClick}>Prev</Button>{' '}
            <Button color="primary" size="lg" disabled={!appData?.next}
                    onClick={onNextClick}>Next</Button>
          </div>
        </>
      }
    </Container>
  );
}

export default React.memo(ShipsList);
