import React, { useEffect, useState } from "react";
import { MainList } from "./components/MainList/MainList";
import { ButtonAdd } from "./components/ButtonAdd/ButtonAdd";
import { ModalWindow } from "./components/ModalWindow/ModalWindow";
import { SearchInput } from "./components/SearchInput/SearchInput";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState("");

  const deleteFunc = (id) => {
    const newArr = data.filter((el) => el.id !== id);
    const newArrFilter = filterData.filter((el) => el.id !== id);
    setData(newArr);
    setFilterData(newArrFilter);
  };

  // const searchFunc = () => {
  //   if (search.length === 0) {
  //     setFilterData([...data]);
  //     return;
  //   }
  //   const newArr = data.filter((el) => el.description.includes(search));

  // const test = newArr.map((el) => {
  //   return el.description.split("");
  // });

  // console.log(test);

  // const changeOnBr = test.map((el)=>{
  //   const newArr = el.
  // })

  // const changeOnBr = firstElementDescriptionArr?.map((el) => {
  //   if (search.includes(el)) {
  //     return `<strong>${el}</strong>`;
  //   } else {
  //     return el;
  //   }
  // });
  // const stringNewDescription = changeOnBr?.join("");
  // const finishArr = data.map((el) => {
  //   if (el.description === newArr[0]?.description) {
  //     return { ...el, description: stringNewDescription };
  //   }
  //   return el;
  // });
  // console.log(finishArr);

  //   setFilterData(newArr);
  // };

  const filterDatas = (search, data) => {
    if (search.length === 0) {
      return setFilterData([...data]);
    }
    const newArr = data
      .filter((el) => el.description.includes(search))
      .map((el) => {
        return {
          ...el,
          description: el.description.replace(
            search,
            `<strong>${search}</strong>`
          ),
        };
      });

    setFilterData([...newArr]);
  };
  console.log(filterData);
  useEffect(() => {
    filterDatas(search, data);
    // searchFunc();
  }, [search, data.length]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0px 30px",
        zIndex: 5,
        position: "relative",
      }}
    >
      {showModal && (
        <ModalWindow
          close={() => {
            setShowModal(false);
          }}
          arr={data}
        />
      )}
      <ButtonAdd
        open={() => {
          setShowModal(true);
        }}
      />
      <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
      {filterData.length > 0 && (
        <MainList data={filterData} deleteFunc={deleteFunc} />
      )}
    </div>
  );
}

export default App;
