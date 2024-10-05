import { GoHome, GoGoal } from "react-icons/go"
import { FaCheck } from "react-icons/fa6"
import { FiUser } from "react-icons/fi"
import { LuBook, LuCalculator } from "react-icons/lu"
import { TbLogout } from "react-icons/tb"

export default function DashNav() {
    return (
        <div>
            <ul className="ml-5 hidden md:block menu bg-base-200 rounded-box">
              <li>
                  <a href="/dashboard/" className="tooltip tooltip-right" data-tip="Home">
                      <GoHome className="h-5 w-5" />
                  </a>
              </li>
              <li>
                  <a href="/dashboard/calculator" className="tooltip tooltip-right" data-tip="Activities">
                      <FaCheck className="h-5 w-5" />
                  </a>
              </li>
              <li>
                  <a href="/dashboard/calculator" className="tooltip tooltip-right" data-tip="Missions">
                      <GoGoal className="h-5 w-5" />
                  </a>
              </li>
              <li>
                  <a href="/dashboard/calculator" className="tooltip tooltip-right" data-tip="Calculator">
                      <LuCalculator className="h-5 w-5" />
                  </a>
              </li>
              <li>
                  <a href="/dashboard/calculator" className="tooltip tooltip-right" data-tip="Resources">
                      <LuBook className="h-5 w-5" />
                  </a>
              </li>
              <div className="my-14"/>
              <li>
                  <a href="/dashboard/account" className="tooltip tooltip-right" data-tip="Account">
                      <FiUser className="h-5 w-5" />
                  </a>
              </li>
              <li>
                  <button className="text-red-500 tooltip tooltip-right" data-tip="Log out">
                      <TbLogout className="h-5 w-5" />
                  </button>
              </li>
          </ul>
          <div>
              <ul className="fixed left-0 bottom-0 mb-0.5 w-screen flex justify-between md:hidden menu menu-horizontal bg-base-200 rounded-box">
                  <div className="flex flex-row">
                      <li>
                          <a href="/dashboard/" className="tooltip" data-tip="Home">
                              <GoHome className="h-5 w-5" />
                          </a>
                      </li>
                      <li>
                          <a href="/dashboard/calculator" className="tooltip" data-tip="Activities">
                              <FaCheck className="h-5 w-5" />
                          </a>
                      </li>
                      <li>
                          <a href="/dashboard/calculator" className="tooltip" data-tip="Missions">
                              <GoGoal className="h-5 w-5" />
                          </a>
                      </li>
                      <li>
                          <a href="/dashboard/calculator" className="tooltip" data-tip="Calculator">
                              <LuCalculator className="h-5 w-5" />
                          </a>
                      </li>
                      <li>
                          <a href="/dashboard/calculator" className="tooltip" data-tip="Resources">
                              <LuBook className="h-5 w-5" />
                          </a>
                      </li>
                  </div>
                  <div className="flex flex-row">
                      <li>
                          <a href="/dashboard/account" className="tooltip" data-tip="Account">
                              <FiUser className="h-5 w-5" />
                          </a>
                          </li>
                      <li>
                          <button className="text-red-500 tooltip" data-tip="Log out">
                              <TbLogout className="h-5 w-5" />
                          </button>
                      </li>
                  </div>
              </ul>
          </div>
        </div>
    )
}