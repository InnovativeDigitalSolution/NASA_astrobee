var sparsemapping =
[
    [ "Creation of sparse maps for robot localization", "sparsemapping.html#autotoc_md351", [
      [ "What is a map", "sparsemapping.html#autotoc_md352", null ],
      [ "Map files", "sparsemapping.html#autotoc_md353", null ],
      [ "ROS node", "sparsemapping.html#autotoc_md354", [
        [ "Inputs", "sparsemapping.html#autotoc_md355", null ],
        [ "Outputs", "sparsemapping.html#autotoc_md356", null ]
      ] ],
      [ "Tools and procedures", "sparsemapping.html#autotoc_md357", [
        [ "Record a bag", "sparsemapping.html#autotoc_md358", null ],
        [ "Filter the bag", "sparsemapping.html#autotoc_md359", null ],
        [ "Copy the bag from the robot:", "sparsemapping.html#autotoc_md360", null ],
        [ "Merging bags", "sparsemapping.html#autotoc_md361", null ],
        [ "Extracting images", "sparsemapping.html#autotoc_md362", null ],
        [ "Building a map", "sparsemapping.html#autotoc_md363", null ],
        [ "Visualization", "sparsemapping.html#autotoc_md364", null ],
        [ "Localize a single frame", "sparsemapping.html#autotoc_md365", null ],
        [ "Testing localization using two maps", "sparsemapping.html#autotoc_md366", null ],
        [ "Testing localization using a bag", "sparsemapping.html#autotoc_md367", null ],
        [ "Extract sub-maps", "sparsemapping.html#autotoc_md368", [
          [ "Merge maps", "sparsemapping.html#autotoc_md369", null ],
          [ "How to build a map efficiently", "sparsemapping.html#autotoc_md370", null ],
          [ "Map strategy for the space station", "sparsemapping.html#autotoc_md371", null ],
          [ "Growing a map when more images are acquired", "sparsemapping.html#autotoc_md372", null ],
          [ "Reducing the number of images in a map", "sparsemapping.html#autotoc_md373", null ]
        ] ]
      ] ]
    ] ],
    [ "Map building", "map_building.html", [
      [ "Detailed explanation", "map_building.html#autotoc_md311", [
        [ "Summary", "map_building.html#autotoc_md310", null ],
        [ "Reduce the number of images", "map_building.html#autotoc_md312", null ],
        [ "Setup the environment", "map_building.html#autotoc_md313", null ],
        [ "Building a map", "map_building.html#autotoc_md314", [
          [ "Map building pipeline", "map_building.html#autotoc_md315", [
            [ "Detect interest points", "map_building.html#autotoc_md316", null ],
            [ "Match images", "map_building.html#autotoc_md317", null ],
            [ "Build tracks", "map_building.html#autotoc_md318", null ],
            [ "Incremental bundle adjustment", "map_building.html#autotoc_md319", null ],
            [ "Bundle adjustment", "map_building.html#autotoc_md320", null ],
            [ "Map rebuilding", "map_building.html#autotoc_md321", null ],
            [ "Vocabulary database", "map_building.html#autotoc_md322", null ]
          ] ],
          [ "Building a SURF map only", "map_building.html#autotoc_md323", null ],
          [ "Additional options", "map_building.html#autotoc_md324", null ]
        ] ],
        [ "Map registration", "map_building.html#autotoc_md325", [
          [ "Registration in the granite lab", "map_building.html#autotoc_md326", null ],
          [ "Registration on the ISS", "map_building.html#autotoc_md327", null ],
          [ "Registration in the MGTF", "map_building.html#autotoc_md328", null ]
        ] ],
        [ "Map verification", "map_building.html#autotoc_md329", null ],
        [ "Sparse map performance and quality evaluation on the robot", "map_building.html#autotoc_md330", [
          [ "Stage the new map", "map_building.html#autotoc_md331", [
            [ "Copy the new map on the robot MLP (preferably in /data):", "map_building.html#autotoc_md332", null ],
            [ "On the MLP, move the current map aside:", "map_building.html#autotoc_md333", null ]
          ] ],
          [ "Stage the bag with images:", "map_building.html#autotoc_md335", null ],
          [ "Stage the feature counter utility (should be added to the install at one point):", "map_building.html#autotoc_md336", null ],
          [ "Launch the localization node on LLP", "map_building.html#autotoc_md337", null ],
          [ "Enable localization and the mapped landmark production (on MLP)", "map_building.html#autotoc_md338", null ],
          [ "Play the bags (on MLP)", "map_building.html#autotoc_md339", null ],
          [ "Examine the performance and features on MLP", "map_building.html#autotoc_md340", [
            [ "Look at the load with htop", "map_building.html#autotoc_md341", null ],
            [ "Watch the frequency of feature production", "map_building.html#autotoc_md342", null ],
            [ "Watch the number of features being produced:", "map_building.html#autotoc_md343", null ]
          ] ]
        ] ],
        [ "Verify localization against a sparse map on a local machine", "map_building.html#autotoc_md344", null ],
        [ "Evaluating the map without running the localization node", "map_building.html#autotoc_md345", null ]
      ] ]
    ] ],
    [ "Total Station", "total_station.html", [
      [ "Doing a Survey with the Total Station", "total_station.html#autotoc_md374", null ]
    ] ],
    [ "Granite Lab Registration", "granite_lab_registration.html", [
      [ "Locations of the control points in the granite lab used for registration", "granite_lab_registration.html#autotoc_md346", [
        [ "Point 1", "granite_lab_registration.html#autotoc_md347", null ],
        [ "Point 2", "granite_lab_registration.html#autotoc_md348", null ],
        [ "Point 3", "granite_lab_registration.html#autotoc_md349", null ],
        [ "Point 4", "granite_lab_registration.html#autotoc_md350", null ]
      ] ]
    ] ],
    [ "Using Faro", "using_faro.html", null ]
];