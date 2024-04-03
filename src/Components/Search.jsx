import React from "react";

const Search = (props) => {
  const { search } = props;
  return (
    <div className="seachContainer w-3/4 borderh-2/4 flex flex-col justify-center items-center m-auto">
      {/* charts */}
      {/* <h1
        className="text-white text-left font-bold text-2xl mb-5 border p-1 w-4/5 h-10
         rounded-md ring ring-yellow-500 ring-offset-2 ring-offset-blue-700  dark:ring-offset-slate-900 md:ml-20"
      >
        {search}
      </h1> */}
      <div className="charts  flex flex-row items-center justify-center">
        <img
          src={chartImage}
          alt="stock trend image"
          className="object-contain max-w-xl h-full"
        />
      </div>
      {/* table */}
      {/* <h2>HTML Table</h2>

      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </table> */}
      {/* buttons */}
      <div className="mt-6 w-full flex items-center justify-center">
        <button className="bg-red-800 w-32 text-white border border-white rounded-md ml-12  h-8 p-1.5">
          Buy
        </button>
        <button className="bg-green-700 w-32 text-white border border-white rounded-md ml-12  h-8 p-1.5">
          Sell
        </button>
      </div>
    </div>
  );
};

export default Search;
