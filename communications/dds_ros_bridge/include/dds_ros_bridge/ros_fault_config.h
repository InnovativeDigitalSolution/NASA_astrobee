/* Copyright (c) 2017, United States Government, as represented by the
 * Administrator of the National Aeronautics and Space Administration.
 * 
 * All rights reserved.
 * 
 * The Astrobee platform is licensed under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

#ifndef DDS_ROS_BRIDGE_ROS_FAULT_CONFIG_H_
#define DDS_ROS_BRIDGE_ROS_FAULT_CONFIG_H_

#include <cstring>
#include <memory>
#include <string>

#include "dds_ros_bridge/ros_sub_rapid_pub.h"
#include "dds_ros_bridge/util.h"

#include "ff_msgs/FaultConfig.h"

#include "knDds/DdsTypedSupplier.h"

#include "rapidUtil/RapidHelper.h"

#include "dds_msgs/AstrobeeConstants.h"
#include "dds_msgs/FaultConfigSupport.h"
#include "dds_msgs/FaultStateSupport.h"

namespace ff {

class RosFaultConfigToRapid : public RosSubRapidPub {
 public:
  RosFaultConfigToRapid(const std::string& subscribe_topic,
                        const std::string& pub_topic,
                        const ros::NodeHandle &nh,
                        const unsigned int queue_size = 10);

  void Callback(ff_msgs::FaultConfigConstPtr const& config);

 private:
  using ConfigSupplier =
    kn::DdsTypedSupplier<rapid::ext::astrobee::FaultConfig>;
  using ConfigSupplierPtr = std::unique_ptr<ConfigSupplier>;

  ConfigSupplierPtr config_supplier_;
};

}  // end namespace ff

#endif  // DDS_ROS_BRIDGE_ROS_FAULT_CONFIG_H_
