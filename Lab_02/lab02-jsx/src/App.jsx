import FragmentLayout from "./components/FragmentLayout";
import ItemList from "./components/ItemList";
import CombinedFragmentList from "./components/CombinedFragmentList";
import "./App.css";

export default function App() {
  return (
    <>
      <FragmentLayout />

      <hr />

      <h2>Item List</h2>
      <ItemList />

      <hr />

      <CombinedFragmentList />
    </>
  );
}