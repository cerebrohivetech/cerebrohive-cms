import { Header, Records, Chart, LatestQouteTable } from "../components/widgets";


export default function Dashboard() {

    return (
        <>
            <Header title="Dashboard"/>
            <Chart />
            {() => ''}
            <Records />
            <LatestQouteTable />
        </>
    )
}