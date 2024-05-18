"""Generated client library for binaryauthorization version v1."""
# NOTE: This file is autogenerated and should not be edited by hand.

from __future__ import absolute_import

from apitools.base.py import base_api
from googlecloudsdk.generated_clients.apis.binaryauthorization.v1 import binaryauthorization_v1_messages as messages


class BinaryauthorizationV1(base_api.BaseApiClient):
  """Generated client library for service binaryauthorization version v1."""

  MESSAGES_MODULE = messages
  BASE_URL = 'https://binaryauthorization.googleapis.com/'
  MTLS_BASE_URL = 'https://binaryauthorization.mtls.googleapis.com/'

  _PACKAGE = 'binaryauthorization'
  _SCOPES = ['https://www.googleapis.com/auth/cloud-platform']
  _VERSION = 'v1'
  _CLIENT_ID = 'CLIENT_ID'
  _CLIENT_SECRET = 'CLIENT_SECRET'
  _USER_AGENT = 'google-cloud-sdk'
  _CLIENT_CLASS_NAME = 'BinaryauthorizationV1'
  _URL_VERSION = 'v1'
  _API_KEY = None

  def __init__(self, url='', credentials=None,
               get_credentials=True, http=None, model=None,
               log_request=False, log_response=False,
               credentials_args=None, default_global_params=None,
               additional_http_headers=None, response_encoding=None):
    """Create a new binaryauthorization handle."""
    url = url or self.BASE_URL
    super(BinaryauthorizationV1, self).__init__(
        url, credentials=credentials,
        get_credentials=get_credentials, http=http, model=model,
        log_request=log_request, log_response=log_response,
        credentials_args=credentials_args,
        default_global_params=default_global_params,
        additional_http_headers=additional_http_headers,
        response_encoding=response_encoding)
    self.projects_attestors = self.ProjectsAttestorsService(self)
    self.projects_platforms_gke_policies = self.ProjectsPlatformsGkePoliciesService(self)
    self.projects_platforms_gke = self.ProjectsPlatformsGkeService(self)
    self.projects_platforms_policies = self.ProjectsPlatformsPoliciesService(self)
    self.projects_platforms = self.ProjectsPlatformsService(self)
    self.projects_policy = self.ProjectsPolicyService(self)
    self.projects = self.ProjectsService(self)
    self.systempolicy = self.SystempolicyService(self)

  class ProjectsAttestorsService(base_api.BaseApiService):
    """Service class for the projects_attestors resource."""

    _NAME = 'projects_attestors'

    def __init__(self, client):
      super(BinaryauthorizationV1.ProjectsAttestorsService, self).__init__(client)
      self._upload_configs = {
          }

    def Create(self, request, global_params=None):
      r"""Creates an attestor, and returns a copy of the new attestor. Returns `NOT_FOUND` if the project does not exist, `INVALID_ARGUMENT` if the request is malformed, `ALREADY_EXISTS` if the attestor already exists.

      Args:
        request: (BinaryauthorizationProjectsAttestorsCreateRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Attestor) The response message.
      """
      config = self.GetMethodConfig('Create')
      return self._RunMethod(
          config, request, global_params=global_params)

    Create.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/attestors',
        http_method='POST',
        method_id='binaryauthorization.projects.attestors.create',
        ordered_params=['parent'],
        path_params=['parent'],
        query_params=['attestorId'],
        relative_path='v1/{+parent}/attestors',
        request_field='attestor',
        request_type_name='BinaryauthorizationProjectsAttestorsCreateRequest',
        response_type_name='Attestor',
        supports_download=False,
    )

    def Delete(self, request, global_params=None):
      r"""Deletes an attestor. Returns `NOT_FOUND` if the attestor does not exist.

      Args:
        request: (BinaryauthorizationProjectsAttestorsDeleteRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Empty) The response message.
      """
      config = self.GetMethodConfig('Delete')
      return self._RunMethod(
          config, request, global_params=global_params)

    Delete.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/attestors/{attestorsId}',
        http_method='DELETE',
        method_id='binaryauthorization.projects.attestors.delete',
        ordered_params=['name'],
        path_params=['name'],
        query_params=[],
        relative_path='v1/{+name}',
        request_field='',
        request_type_name='BinaryauthorizationProjectsAttestorsDeleteRequest',
        response_type_name='Empty',
        supports_download=False,
    )

    def Get(self, request, global_params=None):
      r"""Gets an attestor. Returns `NOT_FOUND` if the attestor does not exist.

      Args:
        request: (BinaryauthorizationProjectsAttestorsGetRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Attestor) The response message.
      """
      config = self.GetMethodConfig('Get')
      return self._RunMethod(
          config, request, global_params=global_params)

    Get.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/attestors/{attestorsId}',
        http_method='GET',
        method_id='binaryauthorization.projects.attestors.get',
        ordered_params=['name'],
        path_params=['name'],
        query_params=[],
        relative_path='v1/{+name}',
        request_field='',
        request_type_name='BinaryauthorizationProjectsAttestorsGetRequest',
        response_type_name='Attestor',
        supports_download=False,
    )

    def GetIamPolicy(self, request, global_params=None):
      r"""Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

      Args:
        request: (BinaryauthorizationProjectsAttestorsGetIamPolicyRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (IamPolicy) The response message.
      """
      config = self.GetMethodConfig('GetIamPolicy')
      return self._RunMethod(
          config, request, global_params=global_params)

    GetIamPolicy.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/attestors/{attestorsId}:getIamPolicy',
        http_method='GET',
        method_id='binaryauthorization.projects.attestors.getIamPolicy',
        ordered_params=['resource'],
        path_params=['resource'],
        query_params=['options_requestedPolicyVersion'],
        relative_path='v1/{+resource}:getIamPolicy',
        request_field='',
        request_type_name='BinaryauthorizationProjectsAttestorsGetIamPolicyRequest',
        response_type_name='IamPolicy',
        supports_download=False,
    )

    def List(self, request, global_params=None):
      r"""Lists attestors. Returns `INVALID_ARGUMENT` if the project does not exist.

      Args:
        request: (BinaryauthorizationProjectsAttestorsListRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (ListAttestorsResponse) The response message.
      """
      config = self.GetMethodConfig('List')
      return self._RunMethod(
          config, request, global_params=global_params)

    List.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/attestors',
        http_method='GET',
        method_id='binaryauthorization.projects.attestors.list',
        ordered_params=['parent'],
        path_params=['parent'],
        query_params=['pageSize', 'pageToken'],
        relative_path='v1/{+parent}/attestors',
        request_field='',
        request_type_name='BinaryauthorizationProjectsAttestorsListRequest',
        response_type_name='ListAttestorsResponse',
        supports_download=False,
    )

    def SetIamPolicy(self, request, global_params=None):
      r"""Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

      Args:
        request: (BinaryauthorizationProjectsAttestorsSetIamPolicyRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (IamPolicy) The response message.
      """
      config = self.GetMethodConfig('SetIamPolicy')
      return self._RunMethod(
          config, request, global_params=global_params)

    SetIamPolicy.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/attestors/{attestorsId}:setIamPolicy',
        http_method='POST',
        method_id='binaryauthorization.projects.attestors.setIamPolicy',
        ordered_params=['resource'],
        path_params=['resource'],
        query_params=[],
        relative_path='v1/{+resource}:setIamPolicy',
        request_field='setIamPolicyRequest',
        request_type_name='BinaryauthorizationProjectsAttestorsSetIamPolicyRequest',
        response_type_name='IamPolicy',
        supports_download=False,
    )

    def TestIamPermissions(self, request, global_params=None):
      r"""Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

      Args:
        request: (BinaryauthorizationProjectsAttestorsTestIamPermissionsRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (TestIamPermissionsResponse) The response message.
      """
      config = self.GetMethodConfig('TestIamPermissions')
      return self._RunMethod(
          config, request, global_params=global_params)

    TestIamPermissions.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/attestors/{attestorsId}:testIamPermissions',
        http_method='POST',
        method_id='binaryauthorization.projects.attestors.testIamPermissions',
        ordered_params=['resource'],
        path_params=['resource'],
        query_params=[],
        relative_path='v1/{+resource}:testIamPermissions',
        request_field='testIamPermissionsRequest',
        request_type_name='BinaryauthorizationProjectsAttestorsTestIamPermissionsRequest',
        response_type_name='TestIamPermissionsResponse',
        supports_download=False,
    )

    def Update(self, request, global_params=None):
      r"""Updates an attestor. Returns `NOT_FOUND` if the attestor does not exist.

      Args:
        request: (Attestor) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Attestor) The response message.
      """
      config = self.GetMethodConfig('Update')
      return self._RunMethod(
          config, request, global_params=global_params)

    Update.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/attestors/{attestorsId}',
        http_method='PUT',
        method_id='binaryauthorization.projects.attestors.update',
        ordered_params=['name'],
        path_params=['name'],
        query_params=[],
        relative_path='v1/{+name}',
        request_field='<request>',
        request_type_name='Attestor',
        response_type_name='Attestor',
        supports_download=False,
    )

    def ValidateAttestationOccurrence(self, request, global_params=None):
      r"""Returns whether the given `Attestation` for the given image URI was signed by the given `Attestor`.

      Args:
        request: (BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (ValidateAttestationOccurrenceResponse) The response message.
      """
      config = self.GetMethodConfig('ValidateAttestationOccurrence')
      return self._RunMethod(
          config, request, global_params=global_params)

    ValidateAttestationOccurrence.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/attestors/{attestorsId}:validateAttestationOccurrence',
        http_method='POST',
        method_id='binaryauthorization.projects.attestors.validateAttestationOccurrence',
        ordered_params=['attestor'],
        path_params=['attestor'],
        query_params=[],
        relative_path='v1/{+attestor}:validateAttestationOccurrence',
        request_field='validateAttestationOccurrenceRequest',
        request_type_name='BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest',
        response_type_name='ValidateAttestationOccurrenceResponse',
        supports_download=False,
    )

  class ProjectsPlatformsGkePoliciesService(base_api.BaseApiService):
    """Service class for the projects_platforms_gke_policies resource."""

    _NAME = 'projects_platforms_gke_policies'

    def __init__(self, client):
      super(BinaryauthorizationV1.ProjectsPlatformsGkePoliciesService, self).__init__(client)
      self._upload_configs = {
          }

    def Evaluate(self, request, global_params=None):
      r"""Evaluates a Kubernetes object versus a GKE platform policy. Returns `NOT_FOUND` if the policy doesn't exist, `INVALID_ARGUMENT` if the policy or request is malformed and `PERMISSION_DENIED` if the client does not have sufficient permissions.

      Args:
        request: (BinaryauthorizationProjectsPlatformsGkePoliciesEvaluateRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (EvaluateGkePolicyResponse) The response message.
      """
      config = self.GetMethodConfig('Evaluate')
      return self._RunMethod(
          config, request, global_params=global_params)

    Evaluate.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/platforms/gke/policies/{policiesId}:evaluate',
        http_method='POST',
        method_id='binaryauthorization.projects.platforms.gke.policies.evaluate',
        ordered_params=['name'],
        path_params=['name'],
        query_params=[],
        relative_path='v1/{+name}:evaluate',
        request_field='evaluateGkePolicyRequest',
        request_type_name='BinaryauthorizationProjectsPlatformsGkePoliciesEvaluateRequest',
        response_type_name='EvaluateGkePolicyResponse',
        supports_download=False,
    )

  class ProjectsPlatformsGkeService(base_api.BaseApiService):
    """Service class for the projects_platforms_gke resource."""

    _NAME = 'projects_platforms_gke'

    def __init__(self, client):
      super(BinaryauthorizationV1.ProjectsPlatformsGkeService, self).__init__(client)
      self._upload_configs = {
          }

  class ProjectsPlatformsPoliciesService(base_api.BaseApiService):
    """Service class for the projects_platforms_policies resource."""

    _NAME = 'projects_platforms_policies'

    def __init__(self, client):
      super(BinaryauthorizationV1.ProjectsPlatformsPoliciesService, self).__init__(client)
      self._upload_configs = {
          }

    def Create(self, request, global_params=None):
      r"""Creates a platform policy, and returns a copy of it. Returns `NOT_FOUND` if the project or platform doesn't exist, `INVALID_ARGUMENT` if the request is malformed, `ALREADY_EXISTS` if the policy already exists, and `INVALID_ARGUMENT` if the policy contains a platform-specific policy that does not match the platform value specified in the URL.

      Args:
        request: (BinaryauthorizationProjectsPlatformsPoliciesCreateRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (PlatformPolicy) The response message.
      """
      config = self.GetMethodConfig('Create')
      return self._RunMethod(
          config, request, global_params=global_params)

    Create.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/platforms/{platformsId}/policies',
        http_method='POST',
        method_id='binaryauthorization.projects.platforms.policies.create',
        ordered_params=['parent'],
        path_params=['parent'],
        query_params=['policyId'],
        relative_path='v1/{+parent}/policies',
        request_field='platformPolicy',
        request_type_name='BinaryauthorizationProjectsPlatformsPoliciesCreateRequest',
        response_type_name='PlatformPolicy',
        supports_download=False,
    )

    def Delete(self, request, global_params=None):
      r"""Deletes a platform policy. Returns `NOT_FOUND` if the policy doesn't exist.

      Args:
        request: (BinaryauthorizationProjectsPlatformsPoliciesDeleteRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Empty) The response message.
      """
      config = self.GetMethodConfig('Delete')
      return self._RunMethod(
          config, request, global_params=global_params)

    Delete.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/platforms/{platformsId}/policies/{policiesId}',
        http_method='DELETE',
        method_id='binaryauthorization.projects.platforms.policies.delete',
        ordered_params=['name'],
        path_params=['name'],
        query_params=[],
        relative_path='v1/{+name}',
        request_field='',
        request_type_name='BinaryauthorizationProjectsPlatformsPoliciesDeleteRequest',
        response_type_name='Empty',
        supports_download=False,
    )

    def Get(self, request, global_params=None):
      r"""Gets a platform policy. Returns `NOT_FOUND` if the policy doesn't exist.

      Args:
        request: (BinaryauthorizationProjectsPlatformsPoliciesGetRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (PlatformPolicy) The response message.
      """
      config = self.GetMethodConfig('Get')
      return self._RunMethod(
          config, request, global_params=global_params)

    Get.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/platforms/{platformsId}/policies/{policiesId}',
        http_method='GET',
        method_id='binaryauthorization.projects.platforms.policies.get',
        ordered_params=['name'],
        path_params=['name'],
        query_params=[],
        relative_path='v1/{+name}',
        request_field='',
        request_type_name='BinaryauthorizationProjectsPlatformsPoliciesGetRequest',
        response_type_name='PlatformPolicy',
        supports_download=False,
    )

    def List(self, request, global_params=None):
      r"""Lists platform policies owned by a project in the specified platform. Returns `INVALID_ARGUMENT` if the project or the platform doesn't exist.

      Args:
        request: (BinaryauthorizationProjectsPlatformsPoliciesListRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (ListPlatformPoliciesResponse) The response message.
      """
      config = self.GetMethodConfig('List')
      return self._RunMethod(
          config, request, global_params=global_params)

    List.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/platforms/{platformsId}/policies',
        http_method='GET',
        method_id='binaryauthorization.projects.platforms.policies.list',
        ordered_params=['parent'],
        path_params=['parent'],
        query_params=['pageSize', 'pageToken'],
        relative_path='v1/{+parent}/policies',
        request_field='',
        request_type_name='BinaryauthorizationProjectsPlatformsPoliciesListRequest',
        response_type_name='ListPlatformPoliciesResponse',
        supports_download=False,
    )

    def ReplacePlatformPolicy(self, request, global_params=None):
      r"""Replaces a platform policy. Returns `NOT_FOUND` if the policy doesn't exist.

      Args:
        request: (PlatformPolicy) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (PlatformPolicy) The response message.
      """
      config = self.GetMethodConfig('ReplacePlatformPolicy')
      return self._RunMethod(
          config, request, global_params=global_params)

    ReplacePlatformPolicy.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/platforms/{platformsId}/policies/{policiesId}',
        http_method='PUT',
        method_id='binaryauthorization.projects.platforms.policies.replacePlatformPolicy',
        ordered_params=['name'],
        path_params=['name'],
        query_params=[],
        relative_path='v1/{+name}',
        request_field='<request>',
        request_type_name='PlatformPolicy',
        response_type_name='PlatformPolicy',
        supports_download=False,
    )

  class ProjectsPlatformsService(base_api.BaseApiService):
    """Service class for the projects_platforms resource."""

    _NAME = 'projects_platforms'

    def __init__(self, client):
      super(BinaryauthorizationV1.ProjectsPlatformsService, self).__init__(client)
      self._upload_configs = {
          }

    def List(self, request, global_params=None):
      r"""Lists all platforms supported by the platform policy.

      Args:
        request: (BinaryauthorizationProjectsPlatformsListRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (ListPlatformsResponse) The response message.
      """
      config = self.GetMethodConfig('List')
      return self._RunMethod(
          config, request, global_params=global_params)

    List.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/platforms',
        http_method='GET',
        method_id='binaryauthorization.projects.platforms.list',
        ordered_params=['parent'],
        path_params=['parent'],
        query_params=['pageSize', 'pageToken'],
        relative_path='v1/{+parent}/platforms',
        request_field='',
        request_type_name='BinaryauthorizationProjectsPlatformsListRequest',
        response_type_name='ListPlatformsResponse',
        supports_download=False,
    )

  class ProjectsPolicyService(base_api.BaseApiService):
    """Service class for the projects_policy resource."""

    _NAME = 'projects_policy'

    def __init__(self, client):
      super(BinaryauthorizationV1.ProjectsPolicyService, self).__init__(client)
      self._upload_configs = {
          }

    def GetIamPolicy(self, request, global_params=None):
      r"""Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

      Args:
        request: (BinaryauthorizationProjectsPolicyGetIamPolicyRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (IamPolicy) The response message.
      """
      config = self.GetMethodConfig('GetIamPolicy')
      return self._RunMethod(
          config, request, global_params=global_params)

    GetIamPolicy.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/policy:getIamPolicy',
        http_method='GET',
        method_id='binaryauthorization.projects.policy.getIamPolicy',
        ordered_params=['resource'],
        path_params=['resource'],
        query_params=['options_requestedPolicyVersion'],
        relative_path='v1/{+resource}:getIamPolicy',
        request_field='',
        request_type_name='BinaryauthorizationProjectsPolicyGetIamPolicyRequest',
        response_type_name='IamPolicy',
        supports_download=False,
    )

    def SetIamPolicy(self, request, global_params=None):
      r"""Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

      Args:
        request: (BinaryauthorizationProjectsPolicySetIamPolicyRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (IamPolicy) The response message.
      """
      config = self.GetMethodConfig('SetIamPolicy')
      return self._RunMethod(
          config, request, global_params=global_params)

    SetIamPolicy.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/policy:setIamPolicy',
        http_method='POST',
        method_id='binaryauthorization.projects.policy.setIamPolicy',
        ordered_params=['resource'],
        path_params=['resource'],
        query_params=[],
        relative_path='v1/{+resource}:setIamPolicy',
        request_field='setIamPolicyRequest',
        request_type_name='BinaryauthorizationProjectsPolicySetIamPolicyRequest',
        response_type_name='IamPolicy',
        supports_download=False,
    )

    def TestIamPermissions(self, request, global_params=None):
      r"""Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

      Args:
        request: (BinaryauthorizationProjectsPolicyTestIamPermissionsRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (TestIamPermissionsResponse) The response message.
      """
      config = self.GetMethodConfig('TestIamPermissions')
      return self._RunMethod(
          config, request, global_params=global_params)

    TestIamPermissions.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/policy:testIamPermissions',
        http_method='POST',
        method_id='binaryauthorization.projects.policy.testIamPermissions',
        ordered_params=['resource'],
        path_params=['resource'],
        query_params=[],
        relative_path='v1/{+resource}:testIamPermissions',
        request_field='testIamPermissionsRequest',
        request_type_name='BinaryauthorizationProjectsPolicyTestIamPermissionsRequest',
        response_type_name='TestIamPermissionsResponse',
        supports_download=False,
    )

  class ProjectsService(base_api.BaseApiService):
    """Service class for the projects resource."""

    _NAME = 'projects'

    def __init__(self, client):
      super(BinaryauthorizationV1.ProjectsService, self).__init__(client)
      self._upload_configs = {
          }

    def GetPolicy(self, request, global_params=None):
      r"""A policy specifies the attestors that must attest to a container image, before the project is allowed to deploy that image. There is at most one policy per project. All image admission requests are permitted if a project has no policy. Gets the policy for this project. Returns a default policy if the project does not have one.

      Args:
        request: (BinaryauthorizationProjectsGetPolicyRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Policy) The response message.
      """
      config = self.GetMethodConfig('GetPolicy')
      return self._RunMethod(
          config, request, global_params=global_params)

    GetPolicy.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/policy',
        http_method='GET',
        method_id='binaryauthorization.projects.getPolicy',
        ordered_params=['name'],
        path_params=['name'],
        query_params=[],
        relative_path='v1/{+name}',
        request_field='',
        request_type_name='BinaryauthorizationProjectsGetPolicyRequest',
        response_type_name='Policy',
        supports_download=False,
    )

    def UpdatePolicy(self, request, global_params=None):
      r"""Creates or updates a project's policy, and returns a copy of the new policy. A policy is always updated as a whole, to avoid race conditions with concurrent policy enforcement (or management!) requests. Returns `NOT_FOUND` if the project does not exist, `INVALID_ARGUMENT` if the request is malformed.

      Args:
        request: (Policy) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Policy) The response message.
      """
      config = self.GetMethodConfig('UpdatePolicy')
      return self._RunMethod(
          config, request, global_params=global_params)

    UpdatePolicy.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/policy',
        http_method='PUT',
        method_id='binaryauthorization.projects.updatePolicy',
        ordered_params=['name'],
        path_params=['name'],
        query_params=[],
        relative_path='v1/{+name}',
        request_field='<request>',
        request_type_name='Policy',
        response_type_name='Policy',
        supports_download=False,
    )

  class SystempolicyService(base_api.BaseApiService):
    """Service class for the systempolicy resource."""

    _NAME = 'systempolicy'

    def __init__(self, client):
      super(BinaryauthorizationV1.SystempolicyService, self).__init__(client)
      self._upload_configs = {
          }

    def GetPolicy(self, request, global_params=None):
      r"""Gets the current system policy in the specified location.

      Args:
        request: (BinaryauthorizationSystempolicyGetPolicyRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Policy) The response message.
      """
      config = self.GetMethodConfig('GetPolicy')
      return self._RunMethod(
          config, request, global_params=global_params)

    GetPolicy.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/locations/{locationsId}/policy',
        http_method='GET',
        method_id='binaryauthorization.systempolicy.getPolicy',
        ordered_params=['name'],
        path_params=['name'],
        query_params=[],
        relative_path='v1/{+name}',
        request_field='',
        request_type_name='BinaryauthorizationSystempolicyGetPolicyRequest',
        response_type_name='Policy',
        supports_download=False,
    )
