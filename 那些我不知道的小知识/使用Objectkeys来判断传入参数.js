getAllTasks(@Query() filterDto: GetTaskFilterDto) :Task[]{
    if (Object.keys(filterDto).length) {
        return this.tasksService.getTasksWithFilters(filterDto);
    }else{
        return this.tasksService.getAllTasks();
    }
   
}