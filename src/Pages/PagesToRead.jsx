import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import useFilterBook from "../Hooks/useFilterBook";
import { useEffect, useState } from "react";

const PagesToRead = () => {
  const { readingBook: readingList, loading } = useFilterBook("readingList");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (readingList.length > 0) {
      const newData = readingList.map((bookData) => ({
        bookName: bookData.bookName.slice(0, 15) + "...",
        page: bookData.totalPages,
      }));
      setData(newData);
    }
  }, [readingList]);

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
   Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const renderCustomAxisTick = (props) => {
    const { x, y, payload } = props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">
          {payload.value}
        </text>
      </g>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center h-40 items-center">
        <span className="loading lg:scale-150 loading-dots loading-lg "></span>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto py-8 px-4 lg:py-20 lg:px-10 bg-base-200 overflow-auto rounded-xl md:rounded-3xl">
      <BarChart className="w-full mx-auto" width={650} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" tick={renderCustomAxisTick} />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="page"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default PagesToRead;
