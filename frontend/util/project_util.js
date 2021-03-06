export const createProject = (rawProject) => {
  let raw_project = rawProject
  return $.ajax({
    method: 'POST',
    url: '/api/projects',
    data: {
      raw_project
    }
  })
}

export const fetchProjects = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/projects',
  })
}

export const fetchProject = (projectId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/projects/${projectId}`
  })
}

export const updateProject = (project) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/projects/${project.id}`,
    data: {data}
  })
}

export const deleteProject = (projectId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/projects/${projectId}`
  })
}
