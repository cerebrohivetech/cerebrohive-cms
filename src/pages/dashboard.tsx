import { Header, Records, Chart, LatestQouteTable } from "../components/widgets";


export default function Dashboard() {

    return (
        <>
            <title>Dashboard</title>
            <Header title="Dashboard"/>
            <Chart />
            {() => ''}
            <Records />
            <LatestQouteTable />
        </>
    )
}