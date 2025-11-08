export default function Home(){

  let style="text-cyan-600 underline hover:text-cyan-300";
  return (
    <main>
      <h1>CPRG306 Assignments</h1>
      <ul>
        <li><a className={style} href="./week-2">Week 2 - Student Info</a></li>
        <li><a className={style} href="./week-3">Week 3 - Shopping List</a></li>
        <li><a className={style} href="./week-4">Week 4 - Quantity Controls</a></li>
        <li><a className={style} href="./week-5">Week 5 - Controlled Components</a></li>
        <li><a className={style} href="./week-6">Week 6 - Handling Lists</a></li>
        <li><a className={style} href="./week-7">Week 7 - Managing State</a></li>
        <li><a className={style} href="./week-8">Week 8 - Fetching Data</a></li>
      </ul>
    </main>
  );
}