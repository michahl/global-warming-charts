import { GoHome, GoGoal } from "react-icons/go"
import { FaCheck } from "react-icons/fa6"
import { FiUser } from "react-icons/fi"
import { LuBook, LuCalculator } from "react-icons/lu"
import { TbLogout } from "react-icons/tb"

export default function DashboardPage() {
    return (
      <div className="relative flex flex-row items-center justify-between min-h-screen">
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
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-[85%] max-w-xl">
                <h1 className="text-3xl font-semibold">Account Settings</h1>
                <p className="text-white/55 font-light text-sm">Manage your account settings and preferences</p>

                <form className="flex flex-col text-left mt-10 space-y-5">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-medium">Email</span>
                        </div>
                        <input type="email" placeholder="current@email.com" className="input input-bordered w-full" />
                    </label>
                    <div className="w-full">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-medium">Current Password</span>
                            </div>
                            <input type="password" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-medium">New Password</span>
                            </div>
                            <input type="password" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-medium">Confirm New Password</span>
                            </div>
                            <input type="password" className="input input-bordered w-full" />
                        </label>

                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-col text-sm">
                            <p className="font-medium">Email notifications</p>
                            <p className="text-white/55">Receive notifications via email</p>
                        </div>
                        <input type="checkbox" id="email-notifications" name="email-notifications" className="toggle" defaultChecked/>
                    </div>
                    <div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-medium">Carbon Measurement Unit</span>
                            </div>
                            <select className="select select-bordered select-sm">
                                <option>Metric (kg CO2e)</option>
                                <option>Imperial (lbs CO2e)</option>
                            </select>
                        </label>
                    </div>
                    <div className="flex flex-row justify-between">
                        <button className="btn btn-error">Delete Account</button>
                        <button type="submit" className="btn btn-primary">Save Changes</button>
                    </div>
                </form>
            </div>
          </div>
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
    );
}