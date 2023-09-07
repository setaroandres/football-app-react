import { Route, Routes } from "react-router-dom"
import { CountriesSelector, LeagueList } from "../components"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<CountriesSelector />} />
      <Route path="/leagues/:id" element={<LeagueList />} />
    </Routes>
  )
}